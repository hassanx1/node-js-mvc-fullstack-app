'use strict'

class TestController {

  async testMethod({request, res}){
    return 'some testing point'
  }

  async testMethodId({request, res, params}){
    return params.id
  }

  async addTask({request, res}){
    return request.all()
  }
}

module.exports = TestController
