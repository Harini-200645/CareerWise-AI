package com.careerwise.careerwise.dto;

public class MentorResponse {

    private String answer;

    public MentorResponse() {
    }

    public MentorResponse(String answer) {
        this.answer = answer;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}