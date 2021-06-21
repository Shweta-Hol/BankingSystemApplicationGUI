package com.controller;

import com.entities.Transaction;
import com.service.TransactionHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin
public class TransactionDetailsController {
    @Autowired
    TransactionHistoryService transactionHistoryService;

    @RequestMapping("/getTransactionHistory")
    @CrossOrigin
    public List<Transaction> transactionHistoryService(@RequestParam Integer  sender){
        return  transactionHistoryService.getTransactionHistory(sender);
    }



    @PutMapping("/updateTransaction")
    @CrossOrigin
    public Map<String, String> update(@RequestBody Transaction transaction) {
        Map<String,String> resultMap = new HashMap<>();
        try {
            String result =transactionHistoryService.saveTransaction(transaction);

            resultMap.put("status",result);

        } catch (NoSuchElementException e) {
            resultMap.put("status",HttpStatus.NOT_FOUND.toString());
        }
        return resultMap;
    }
}
