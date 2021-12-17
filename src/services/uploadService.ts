import S3 from "react-aws-s3-typescript"

const uploadFile = (file: any, filename: string) => {
  const config = {
    bucketName: "",
    dirName: "",
    region: "",
    accessKeyId: "",
    secretAccessKey: "//",
  }

  const s3Client = new S3(config)

  s3Client.uploadFile(file, filename).then((data) => {
    console.log(data)
    if (data.status === 204) {
      console.log("upload success")
    } else {
      console.log("fail")
    }
  })
}

export default uploadFile
