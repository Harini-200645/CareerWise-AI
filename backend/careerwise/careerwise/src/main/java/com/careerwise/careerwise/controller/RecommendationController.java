package com.careerwise.careerwise.controller;

import com.careerwise.careerwise.dto.QuizRequest;
import com.careerwise.careerwise.dto.RecommendationResponse;
import com.careerwise.careerwise.service.RecommendationService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recommendation")
@CrossOrigin(origins = "*")
public class RecommendationController {

    private final RecommendationService recommendationService;

    public RecommendationController(RecommendationService recommendationService) {
        this.recommendationService = recommendationService;
    }

    @PostMapping
    public RecommendationResponse getRecommendation(
            @RequestBody QuizRequest request) {

        return recommendationService.getRecommendation(request);

    }

}