import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectsList = [
    {projectName:"CoE Team Initiation Setup and Launch",
    projectDesc:""},
	{projectName:"Ways of working - Building an Integrated cyber security team",
    projectDesc:""},
	{projectName:"Universal Data lake - Data ingestion - I&A",
    projectDesc:""},
	{projectName:"KFAS, CJ - Crown Jewel Process ",
    projectDesc:""},
	{projectName:"ETP - Risks and Exemption Cleanup",
    projectDesc:""},
	{projectName:"Security Assurance - Monthly Cadence",
    projectDesc:""},
	{projectName:"Monthly Platform Cadence",
    projectDesc:"Consumer Engagement Customer Development, Consumer Operations, Consumer Experience and Performance, R&D, Leverage DMS, Go to Market"},
	{projectName:"Security Metrics - Secure by Design, Org Managed Estate KPI Definition",
    projectDesc:""},
	{projectName:"Cloud Migration Strategies",
    projectDesc:""},
	{projectName:"Risk recon - Ponemon Report Research and Traceback",
    projectDesc:""},
	{projectName:"AWS, Azure, Salesforce - Cloud Assessment",
    projectDesc:""},
	{projectName:"Covid 19 and Beyond - Redefining Technology Roadmaps",
    projectDesc:""},
	{projectName:"Priority Systems - Asset Inventory Repository - Re-Evaluation - Reassessment - Fisk Residue - Fill Compliance Gap",
    projectDesc:""},
	{projectName:"Platforms - Heat Map Project - Risk Posture",
    projectDesc:""},
	{projectName:"CMDB and ServiceNow Clean Up - Misalignment",
    projectDesc:""},
	{projectName:"CJ Audit Remediations, KFAS, PPD",
    projectDesc:""},
	{projectName:"Factory - Augmented Reality Implementations",
    projectDesc:""},
	{projectName:"CiiC Centers - Establishment - Improvement of Consumer Experience Centers Marketing and Sales Centers",
    projectDesc:""},
	{projectName:"Cyber Risk Breakdown ",
    projectDesc:"Geography Wise Category Wise, Inherent, Residual (Status), Platform Wise, Projectwise, Service Wise(Cloud, On Prem, M&A) Asset Based, Annual Loss Expectancy, Control Assessments Impact, ROI"},
	{projectName:"Cyber Security Awareness - Training and Testing",
    projectDesc:""},
	{projectName:"Gaming - Contest - Education",
    projectDesc:""},
	{projectName:" Power BI - Executive Dashboards for CSPA - KPIs - Leader Wise, Platform Wise, Risk Wise",
    projectDesc:""},
	{projectName:"Feedback Initiative Platform",
    projectDesc:""},
	{projectName:"Devising Strategies for Risk Assessment Approach to Various Critical Assets of Organisation",
    projectDesc:""},
	{projectName:"Technology Roadmap Integration for Business Platforms - Cyber Security",
    projectDesc:""},
	{projectName:"CoE Engagement Model - Redefining",
    projectDesc:""},
	{projectName:"API Integrations - Learning and Early Adaptations - Approach Defined from Gartner",
    projectDesc:""},
	{projectName:"Application Vulnerability - Remediation",
    projectDesc:""},
	{projectName:"Cyber Compliance Cockpit - PowerBI",
    projectDesc:""},
	{projectName:"DTC Customer - Websites - Exposed URLs - PT Oversee Compliance Management and PAG Status Review",
    projectDesc:""},
	{projectName:"Redefining - Security Baseline Control with Evolving Technology",
    projectDesc:""},
	{projectName:"Big Rocks and Iops - Promotion as a Service",
    projectDesc:""},
	{projectName:"WhatsApp - Integration for Sales and Marketing, Promotions",
    projectDesc:""},
	{projectName:"POCs, RFPs, Pilots, Tier 1 Advisory",
    projectDesc:""},
	{projectName:"eCommerce Platforms",
    projectDesc:"App Onboarding Assessment, Framework, Checklist based Easy Approach, Next step deep dive if higherrisk, Security assessment, Legal Assessment for further Evaluation and Approach"},
	{projectName:"Cloud based Services - Content Security Policy Implementation and Exemptions Challenges, Web Extensions",
    projectDesc:""},
	{projectName:"Project Aurora - Leveraged DMS, Salesforce and Trade Promotion Management Platform Integration",
    projectDesc:""},
  ];
}
