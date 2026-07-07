package com.careerwise.careerwise.service;

import com.careerwise.careerwise.dto.QuizRequest;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private static final String MODEL = "gemini-2.5-flash";

    private final HttpClient client = HttpClient.newHttpClient();
    private final ObjectMapper mapper = new ObjectMapper();

    // ===================== CAREER RECOMMENDATION ONLY =====================
    public String getCareerRecommendation(QuizRequest request) {

        try {

            String prompt = """
You are an expert career counsellor.

Based on the student profile, recommend ONE best career.

Name: %s
Education: %s
Skills: %s
Interests: %s
Strengths: %s

Return ONLY simple text (NOT JSON).
Give:
- Career name
- Short explanation
- Roadmap (5 steps)
""".formatted(
                    request.getName(),
                    request.getEducation(),
                    request.getSkills(),
                    request.getInterests(),
                    request.getStrengths()
            );

            String body = """
{
  "contents": [{
    "parts": [{
      "text": "%s"
    }]
  }]
}
""".formatted(prompt.replace("\"", "\\\""));

            HttpRequest requestApi = HttpRequest.newBuilder()
                    .uri(URI.create(
                            "https://generativelanguage.googleapis.com/v1beta/models/"
                                    + MODEL
                                    + ":generateContent?key=" + apiKey))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(body))
                    .build();

            HttpResponse<String> response = client.send(
                    requestApi,
                    HttpResponse.BodyHandlers.ofString());

            return extractText(response.body());

        } catch (Exception e) {
            return "Server error. Please try again.";
        }
    }

    // ===================== SAFE JSON PARSER =====================
    private String extractText(String responseBody) {

        try {
            JsonNode root = mapper.readTree(responseBody);

            return root.path("candidates")
                    .path(0)
                    .path("content")
                    .path("parts")
                    .path(0)
                    .path("text")
                    .asText("No response");

        } catch (Exception e) {
            return responseBody;
        }
    }
}