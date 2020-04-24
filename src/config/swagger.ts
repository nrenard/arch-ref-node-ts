import swaggerJSDoc from 'swagger-jsdoc';

export default swaggerJSDoc({
  swaggerDefinition: {
    info: {
      title: 'Arch ref node microservice',
      version: '0.1.0',
    },
  },
  apis: ['src/routes/**/*.js'],
});
