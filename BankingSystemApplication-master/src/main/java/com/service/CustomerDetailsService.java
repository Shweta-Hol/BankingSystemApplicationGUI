package com.service;

import com.entities.Customer;
import com.entities.Transaction;
import com.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerDetailsService {

    @Autowired
    CustomerRepository customerRepository;

    public List<Customer> getCustomerDetailService()
    {
        return customerRepository.findAll();
    }
}
