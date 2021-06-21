package com.service;

import com.entities.Customer;
import com.entities.Transaction;
import com.repository.CustomerRepository;
import com.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TransactionHistoryService {

    @Autowired
    TransactionRepository transactionRepository;

    @Autowired
    CustomerRepository customerRepository;

    public String saveTransaction(Transaction transaction) {
        Optional<Customer> sender =customerRepository.findById(transaction.getSenderId());
        Optional<Customer> reciever =customerRepository.findById(transaction.getReceiverId());
        transaction.setReceiver(reciever.get().getName());
        transaction.setSender(sender.get().getName());

        if(sender.get().getBalance() < transaction.getAmount())
        {
            return "Insufficient funds !!!!";
        }
        transactionRepository.save(transaction);

        sender.get().setBalance(sender.get().getBalance()- transaction.getAmount());
        reciever.get().setBalance(reciever.get().getBalance() + transaction.getAmount());
        customerRepository.save(sender.get());
        customerRepository.save(reciever.get());
        return "Transaction Successful !!!";
    }

    public List<Transaction> getTransactionHistory(Integer senderId) {
        List<Transaction> transactionListCustomer = new ArrayList<>();
        List<Transaction> transactionList=  transactionRepository.findAll();
        transactionList.forEach(transaction -> {
            if(transaction.getSenderId() == senderId)
            {
                transactionListCustomer.add(transaction);
            }
        });
        return transactionListCustomer;
    }



}

