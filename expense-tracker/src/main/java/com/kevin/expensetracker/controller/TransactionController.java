package com.kevin.expensetracker.controller;

import com.kevin.expensetracker.DTO.TransactionResponse;
import com.kevin.expensetracker.entity.Transaction;
import com.kevin.expensetracker.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public List<TransactionResponse> getAllTransactions() {
        List<Transaction> transactions = transactionService.getAllTransactions();

        return transactions.stream()
                .map(transaction -> new TransactionResponse(
                        transaction.getId(),
                        transaction.getTitle(),
                        transaction.getAmount(),
                        transaction.getDate() != null ? transaction.getDate().toString() : null
                ))
                .toList();
    }


    @PostMapping
    public Transaction createTransaction(@RequestBody Transaction transaction) {
        return transactionService.createTransaction(transaction);
    }

    @DeleteMapping("/{id}")
    public void deleteTransaction(@PathVariable Long id) {
        transactionService.deleteTransaction(id);
    }
}
