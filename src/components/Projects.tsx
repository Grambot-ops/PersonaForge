import React from 'react';
import { Project } from '../types';

const projectData: Project[] = [
    {
        id: 1,
        title: "Semester 1 Skills 2 - Packet Automation",
        description: "Developed an automated system for packet inspection and analysis to detect network anomalies.",
        context: "This project was developed as part of the Skills 2 course in semester 1, focusing on network security and automation.",
        background: "With increasing network threats, organizations need automated methods to inspect and analyze network packets to detect suspicious activities quickly.",
        realizations: "I discovered that pattern recognition algorithms could be fine-tuned to dramatically reduce false positives while maintaining high detection rates.",
        learnings: "Gained expertise in packet analysis, network protocols, and implementing machine learning models for anomaly detection."
    },
    {
        id: 2,
        title: "Semester 2 Skills 2 - SIEM Stack Creation",
        description: "Built a complete Security Information and Event Management (SIEM) stack for comprehensive security monitoring.",
        context: "This semester 2 project involved designing and implementing a full-featured SIEM solution for enterprise security operations.",
        background: "Modern security operations centers need integrated tools to collect, analyze, and respond to security events across complex infrastructure.",
        realizations: "The integration of automated alerting with incident response workflows significantly reduced the time from detection to remediation.",
        learnings: "Developed deep understanding of security log analysis, correlation rules, and building security dashboards for effective monitoring."
    },
    {
        id: 3,
        title: "Bicep Configuration with Microsoft Azure",
        description: "Created infrastructure-as-code templates using Azure Bicep to deploy secure cloud environments.",
        context: "This project focused on using Azure Bicep to automate the deployment of secure infrastructure in Microsoft Azure.",
        background: "Manual configuration of cloud resources is error-prone and doesn't scale. Infrastructure-as-code provides consistency and security by default.",
        realizations: "By incorporating security best practices directly into the templates, we could ensure that all deployments met our compliance requirements.",
        learnings: "Mastered Azure Bicep syntax, template structures, and security configurations for Azure resources. Learned how to implement policy-as-code."
    },
    {
        id: 4,
        title: "AWS Hosting Platform",
        description: "Designed and implemented a secure, scalable hosting platform on AWS for containerized applications.",
        context: "This project aimed to create a production-ready hosting environment for microservices on AWS.",
        background: "Organizations moving to container-based applications need secure, scalable infrastructure that supports DevOps practices.",
        realizations: "Implementing a security boundary at each layer (network, container, application) provided defense-in-depth without sacrificing developer velocity.",
        learnings: "Gained expertise in AWS ECS/EKS, VPC design, IAM policies, and setting up CI/CD pipelines for container deployment."
    },
    {
        id: 5,
        title: "IoT Security Solution",
        description: "Developed a security monitoring and management solution for IoT devices in enterprise environments.",
        context: "This project addressed the growing security challenges posed by IoT devices in corporate networks.",
        background: "IoT devices often lack robust security controls and can become entry points for attackers if not properly monitored and managed.",
        realizations: "Creating a dedicated network segment with specialized monitoring tools allowed us to identify compromised devices quickly without affecting operations.",
        learnings: "Learned about IoT protocols, device vulnerabilities, network segmentation strategies, and creating custom security rules for IoT traffic patterns."
    }
];

const Projects: React.FC = () => {
    return (
        <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projectData.map((project) => (
                    <div key={project.id} className="card hover:translate-y-[-5px]">
                        <h3 className="text-xl font-bold mb-3 text-blue-700">{project.title}</h3>
                        <p className="text-gray-800 font-medium mb-4">{project.description}</p>
                        
                        <div className="space-y-3 text-gray-600">
                            <div>
                                <h4 className="text-sm uppercase tracking-wider font-semibold text-gray-500 mb-1">Context</h4>
                                <p>{project.context}</p>
                            </div>
                            
                            <div>
                                <h4 className="text-sm uppercase tracking-wider font-semibold text-gray-500 mb-1">Background</h4>
                                <p>{project.background}</p>
                            </div>
                            
                            <div>
                                <h4 className="text-sm uppercase tracking-wider font-semibold text-gray-500 mb-1">Key Realizations</h4>
                                <p>{project.realizations}</p>
                            </div>
                            
                            <div>
                                <h4 className="text-sm uppercase tracking-wider font-semibold text-gray-500 mb-1">Learnings</h4>
                                <p>{project.learnings}</p>
                            </div>
                        </div>
                        
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg flex justify-center">
                            <img 
                                src={`/projects/project${project.id}.jpg`} 
                                alt={project.title}
                                className="max-h-40 rounded shadow"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;