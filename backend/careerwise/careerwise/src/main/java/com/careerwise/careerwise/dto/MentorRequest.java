package com.careerwise.careerwise.dto;

public class MentorRequest {

    private String question;

    public MentorRequest() {
    }

    public MentorRequest(String question) {
        this.question = question;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }
}