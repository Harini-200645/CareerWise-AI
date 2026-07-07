package com.careerwise.careerwise.service;

import com.careerwise.careerwise.dto.QuizRequest;
import com.careerwise.careerwise.dto.RecommendationResponse;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class RecommendationService {

    public RecommendationResponse getRecommendation(QuizRequest request) {

        RecommendationResponse response = new RecommendationResponse();

        if (request.getInterests().contains("Artificial Intelligence")) {

            response.setCareer("AI Engineer");
            response.setSummary("You have strong logical thinking and problem-solving skills.");
            response.setReason("Based on your interests in Artificial Intelligence and programming.");

            response.setSkills(Arrays.asList(
                    "Java",
                    "Python",
                    "Machine Learning",
                    "Deep Learning",
                    "SQL",
                    "Spring Boot"
            ));

            response.setRoadmap(Arrays.asList(
                    "Master Java",
                    "Learn Python",
                    "Learn Data Structures",
                    "Learn SQL",
                    "Learn Machine Learning",
                    "Build AI Projects",
                    "Learn Spring Boot",
                    "Deploy Projects"
            ));

            response.setCourses(Arrays.asList(
                    "Java Programming",
                    "Python Programming",
                    "Machine Learning",
                    "Deep Learning",
                    "Spring Boot",
                    "SQL Database"
            ));

            response.setSalary("₹8 LPA - ₹18 LPA");
            response.setFutureScope("Excellent demand in AI, Automation and Data Science.");

            response.setCompanies(Arrays.asList(
                    "Google",
                    "Microsoft",
                    "Amazon",
                    "Infosys",
                    "TCS",
                    "Accenture"
            ));

        } else if (request.getInterests().contains("Healthcare")) {

            response.setCareer("Doctor");
            response.setSummary("You enjoy helping people and caring for others.");
            response.setReason("Your empathy and healthcare interests indicate medical careers.");

            response.setSkills(Arrays.asList(
                    "Patient Care",
                    "Medical Knowledge",
                    "Diagnosis",
                    "Communication",
                    "Decision Making"
            ));

            response.setRoadmap(Arrays.asList(
                    "Complete MBBS",
                    "Medical Internship",
                    "Choose Specialization",
                    "Hospital Practice",
                    "Medical License"
            ));

            response.setCourses(Arrays.asList(
                    "MBBS",
                    "Clinical Practice",
                    "Emergency Medicine"
            ));

            response.setSalary("₹10 LPA - ₹30 LPA");
            response.setFutureScope("Very high demand in healthcare.");

            response.setCompanies(Arrays.asList(
                    "Apollo Hospitals",
                    "Fortis",
                    "AIIMS",
                    "CMC Vellore"
            ));

        } else if (request.getInterests().contains("Business")) {

            response.setCareer("Business Analyst");
            response.setSummary("You have leadership and decision-making abilities.");
            response.setReason("Business management suits your interests.");

            response.setSkills(Arrays.asList(
                    "Excel",
                    "SQL",
                    "Power BI",
                    "Communication",
                    "Management"
            ));

            response.setRoadmap(Arrays.asList(
                    "Learn Excel",
                    "Learn SQL",
                    "Learn Power BI",
                    "Business Analytics",
                    "Complete Internship"
            ));

            response.setCourses(Arrays.asList(
                    "Business Analytics",
                    "Excel",
                    "Power BI"
            ));

            response.setSalary("₹6 LPA - ₹15 LPA");
            response.setFutureScope("Growing rapidly across industries.");

            response.setCompanies(Arrays.asList(
                    "Deloitte",
                    "EY",
                    "KPMG",
                    "Infosys"
            ));

        } else {

            response.setCareer("UI/UX Designer");
            response.setSummary("You have strong creativity and innovation.");
            response.setReason("Creative thinking matches UI/UX and design careers.");

            response.setSkills(Arrays.asList(
                    "Figma",
                    "Adobe XD",
                    "Photoshop",
                    "HTML",
                    "CSS"
            ));

            response.setRoadmap(Arrays.asList(
                    "Learn Design Principles",
                    "Master Figma",
                    "Build Portfolio",
                    "Complete Internship"
            ));

            response.setCourses(Arrays.asList(
                    "UI Design",
                    "UX Design",
                    "Figma"
            ));

            response.setSalary("₹5 LPA - ₹12 LPA");
            response.setFutureScope("High demand in software companies.");

            response.setCompanies(Arrays.asList(
                    "Zoho",
                    "Freshworks",
                    "Google",
                    "Adobe"
            ));
        }

        return response;
    }
}