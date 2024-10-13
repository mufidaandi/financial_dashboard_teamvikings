package com.example.financialdashboard.controller;

import com.example.financialdashboard.model.Account;
import com.example.financialdashboard.model.AccountData;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RestController
public class FinancialController {

    @GetMapping("/balances")
    public List<Account> getAllAccounts() throws IOException {
        // Load the JSON file from the resources folder
        ObjectMapper objectMapper = new ObjectMapper();
        InputStream jsonStream = getClass().getResourceAsStream("/static/balances.json");

        // Parse the JSON file into the AccountData class
        AccountData accountData = objectMapper.readValue(jsonStream, AccountData.class);

        // Return the list of accounts
        return accountData.getAccounts();
    }
}
