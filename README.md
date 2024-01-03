Project Overview: Creating a Cloud Resume with AWS

![Alt text](CloudResumeArchitecture.jpg)

In this project, I embarked on a transformative journey to revolutionize my resume by harnessing the power of Amazon Web Services (AWS).
I leveraged various AWS services and implemented cutting-edge techniques to create a dynamic and innovative Cloud Resume that showcases my skills and achievements,
leaving a lasting impression on potential employers.

AWS Services Used:

Amazon S3 (Simple Storage Service): I utilized Amazon S3 as a robust storage solution for hosting my website's HTML, CSS, and JavaScript files.
The highly durable and scalable nature of S3 made it an ideal choice for hosting static content, ensuring reliable and efficient delivery to users.

Amazon CloudFront: To enhance the performance and global reach of my website, I incorporated Amazon CloudFront as a Content Delivery Network (CDN).
CloudFront cached and distributed my website's content across a network of edge locations worldwide, reducing latency and delivering an improved user experience.

AWS Certificate Manager (ACM): To ensure secure communication and enable HTTPS on my website, I obtained SSL certificates from AWS Certificate Manager.
This added an extra layer of security and boosted user trust in my Cloud Resume.

Amazon Route53: Serving as the domain registrar and DNS service, Amazon Route53 allowed me to manage the routing of traffic to my CloudFront distribution.
By registering my custom domain, I created a professional and branded experience for visitors.

AWS Lambda: To implement an engaging feature, I integrated AWS Lambda into my Cloud Resume. I utilized Lambda to create a view counter for my website,
retrieving data from Amazon DynamoDB to display the number of visitors my resume received.

Amazon DynamoDB: As the database for my view counter feature, Amazon DynamoDB effectively stored and managed the data representing the number of visitors my website received.
The serverless nature of DynamoDB complemented the overall project's architecture.

GitHub Actions: To streamline my development workflow and automate the deployment process, I employed GitHub Actions.
This CI/CD tool allowed me to automatically push changes to my S3 bucket whenever I committed updates to my website code.

Techniques Implemented:

HTML for Resume Design: By embracing HTML for my resume, I unlocked the potential to create a visually stunning and interactive representation of my skills and achievements.
This dynamic approach distinguished my Cloud Resume from traditional formats like Word documents or PDFs.

Cloud Computing: Embracing cloud computing principles, I hosted my website on AWS, enabling it to be highly scalable, secure, and globally accessible.
This strategic decision empowered me to leverage the full capabilities of the cloud to power my resume.

Serverless Architecture: To build a serverless web application portfolio, I leveraged AWS Lambda and other serverless services.
This architecture eliminated the need for managing infrastructure, allowing me to focus on writing code and delivering value to users.

CI/CD Automation: Setting up CI/CD with GitHub Actions streamlined my development process.
This automation ensured that changes to my website code were seamlessly synchronized with my S3 bucket, providing a smooth user experience and allowing rapid iterations.

API Integration: By integrating a visitor counter API with AWS Lambda and DynamoDB, my website was equipped to display the number of visitors it received.
This enhanced user engagement and provided real-time interactivity on the Cloud Resume.

DNS Configuration: Configuring Amazon Route53 allowed me to manage the DNS settings for my domain effectively.
This ensured the proper routing of traffic to my CloudFront distribution, and SSL certificates provided a secure and professional experience for visitors.

Overall, this Cloud Resume project empowered me to elevate my resume to new heights, utilizing AWS services and modern techniques to stand out in the competitive job market.
The project's success highlighted the transformative potential of cloud technologies and their application in the world of resume-building, leaving me equipped with newfound
knowledge and skills for future endeavors.