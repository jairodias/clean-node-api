import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helper/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }

    if (!httpRequest.body.emai) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
