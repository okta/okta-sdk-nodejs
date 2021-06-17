module.exports = () => ({
  definitions: {
    custom: {
      id: "#custom",
      type: "object",
      properties: {
        twitterUserName: {
          title: "Twitter username",
          description: "User's username for twitter.com",
          type: "string",
          required: false,
          minLength: 1,
          maxLength: 20,
          permissions: [
            {
              principal: "SELF",
              action: "READ_WRITE"
            }
          ]
        }
      },
      required: []
    }
  }
});
