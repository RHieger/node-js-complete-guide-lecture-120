//  404 error page controller

exports.get404 = (request, response, next) => {
  response.status(404).render(
    '404',
    {
      docTitle: 'Page Not Found',
      path: ''
    }
  )
};
