import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";

const serviceAccount = {
 type: "service_account",
  project_id: "intrepid-honor-321018",
  private_key_id: "c4c137fe4a71d849eff604c0540e62290ff9c12d",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCb2eU7Grt9uO1z\nhExJ58WLE5Q9nBFKDsEPvCs02/HqXdhlicPVV3kAzpu7Hd9z817axX+0Fk7N9mFE\ns1omwQuZNFn2pP+wRazzzpYxHnZs8vbn9MV1WfcdyzrKhrWRteEQQK8KiZq5pMGa\nJHCsboNXsBSoTLr2wy4Npmpe85mjdjgpNFttpvYg+DdbHBBFZndpc/PsF3wFSZUv\n7QvXSzvJHs22tYBiiys1tlOg6aWNfR+NOchuezlWuV2uakkeQp4zADuDDwzeITfk\nTOYEpPJJMQ4QTlP2QPu55ZFKT2DJJW2w820YGhi4w2PXNBHlgLJNKaFlH1jAwCt3\nnS0zeaaXAgMBAAECggEAArfXJqO9t2CdS5F4HyXarSVHRZfOOWNufI7EliRr4LGI\nT6UKdFMVOi1gS/AmcIhDFD+zjXmCIFd2tNMH9HsTb7WZCBMynmlorcvhlLO6TwYh\nxkPfmb9a7vsXaGbXDdaFOVpXczCZMTmtYrnV+TvoMIRSp+jGrf0TdYt8eXF4MYCc\nVPTMqWc6X8B8I2A/OshmLArWQovRZ0eFQ5TCwLU6nO1nI9v0IKcv3IdwaQtP4/6W\nL+Vuxj3y5Ca6wE8kPWl1q3trUnlv10G4CAhXFjNGxSuTbEOQt453RxwmBeHg3OkU\nFArjUaPIK/AYYTlVPkz19p/RL5Qw/Y+m9VEDFlJfeQKBgQDa9NLYTj0G9T8nGKeQ\nkMQUBsWK0ysQ0h4Nj62I3d1jUQCBrkfRPZ7hxWpwBe1PJbO98rC3dzwbGMRTWIUJ\nZMMPZxJ7F+IIgcT6JIR3f7sFXlibiopAyI412CNuolmu6llEzVcFzhQcVyqIH8a3\ncx77ZJPgsrgkH2fjL64cBzpntQKBgQC2N+9fPeYQjA/9QM0OXnz+uSHpkkyDl01z\nq3DvRZVqsBuYH+yt43PmDwZ4qZsl9XQ7Mj/mtTyf5j6/voOyuOTGWs2LIxxfXK7S\nhbDjT8BF9UtvpZKU1L2PjTm05yRWiXowQMp18/7can8HxHtb32kL4wjqtwWmdqVv\ntQPOWrrsmwKBgQCY/u29m53lGMVSKlYcHCwG2lx6jufOzyOU0kquEmm6FkXGV+Nz\nAB3fILUpJdsWrP+VwNleuYBUZs/4dSgw0inCv4EYZi3ZR+Q97fpqDeS+8Zf0x6+n\naPyF/0ty6RrFsJdEDj+6nK9MxlO/3oRad6S0gSkbn4YwJ4nOI+kDSMG06QKBgDYa\nh52M4Hm7TKgSjJAeqBht2c7jXIqZ6ypUFjVFQOcroRXbLMg4x9ngTjiXi3SK29cT\nxXt4BqcnkywVoj73vR3UKkGMzEjYWSQzA+GKdXmQKrTcwZglTp+H/EFlfBmhukEH\ni9XX+61whYVF5qbRv/wCjkw6yZeylM6FPbsQn33PAoGAJdC2zEAMbbhY57BShEp0\nh2IbKYKr0X7OLYHFwk7RDJUqLBSjZol/F1VdpwtgacqMJ3Oa0soh46WMiGHstt+1\nEZorlKf3UBiWLjky6tugfCd8M2idefz2s6JIHPN2ENQNvkt74SfGU0S8tA1gbNXE\ncBOqdusFbB9t7I13vt/ZVpY=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-iemeu@intrepid-honor-321018.iam.gserviceaccount.com",
  client_id: "118287071123630286946",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-iemeu%40intrepid-honor-321018.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});