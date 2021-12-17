// 1. Importing the SDK
import AWS from "aws-sdk"

// 2. Configuring the S3 instance for Digital Ocean Spaces

const REGION = "sgp1"
const BUCKET = "hoangnguyen147"
const ACCESS_KEY_ID = "WJAVXIABARIJJ75WLHIY"
const SECRET_ACCESS_KEY = "SpWH8fnwrKxGjmO/J6GWf/x1MgreylAX69nldf2wcRg"
const spacesEndpoint = new AWS.Endpoint(`${REGION}.digitaloceanspaces.com`)

export const uploadImage = (file: any) => {
  const url = `https://${BUCKET}.${REGION}.digitaloceanspaces.com/${file.path}`
  const S3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  })

  console.log("upload", file)

  // 3. Using .putObject() to make the PUT request, S3 signs the request
  const params = {
    Body: JSON.stringify(file.stream),
    Bucket: "hoangnguyen147",
    CORSConfiguration: {
      CORSRules: [
        {
          AllowedOrigins: ["*"],
          AllowedMethods: ["GET"],
        },
      ],
    },
  }
  S3.putBucketCors(params)
    .on("build", (request) => {
      request.httpRequest.headers.Host = "https://sgp1.digitaloceanspaces.com"
      // Note: I am assigning the size to the file Stream manually
      request.httpRequest.headers["Content-Length"] = file.size
      request.httpRequest.headers["Content-Type"] = file.mimetype
      request.httpRequest.headers["x-amz-acl"] = "public-read"
      request.httpRequest.headers["Access-Control-Allow-Origin"] = "*"
    })
    .send((err, data) => {
      console.log(data)
      console.log(err)
    })
}
