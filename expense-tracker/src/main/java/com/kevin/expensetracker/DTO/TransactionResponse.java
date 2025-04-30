package com.kevin.expensetracker.DTO;

public class TransactionResponse {

    private Long id;
    private String title;
    private Double amount;
    private String date;

    // ✅ No-arg constructor (needed for frameworks like Jackson)
    public TransactionResponse() {
    }

    // ✅ All-arg constructor
    public TransactionResponse(Long id, String title, Double amount, String date) {
        this.id = id;
        this.title = title;
        this.amount = amount;
        this.date = date;
    }

    // ✅ Getters
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Double getAmount() {
        return amount;
    }

    public String getDate() {
        return date;
    }

    // ✅ Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
