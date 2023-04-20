import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';

@Catch()
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: InternalServerErrorException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    /**
     * @description Exception json response
     * @param message
     */
    const responseMessage = (type, message) => {
      response.status(status).json({
        statusCode: status,
        path: request.url,
        errorType: type,
        errorMessage: message,
      });
    };

    // Throw an exceptions for either
    // MongoError, ValidationError, TypeError, CastError and Error
    if (exception.message) {
      const errorMessage = exception.message.includes('11000')
        ? 'Duplicated email'
        : exception.message;
      responseMessage('Error', errorMessage);
    } else {
      responseMessage(exception.name, exception.message);
    }
  }
}
