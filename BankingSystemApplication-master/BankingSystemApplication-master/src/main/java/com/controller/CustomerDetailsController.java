package com.controller;

import com.entities.Customer;
import com.entities.Transaction;
import com.service.CustomerDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class CustomerDetailsController {

    @Autowired
    CustomerDetailsService customerDetailsService;

    @RequestMapping ("/getCustomerDetails")
    public List<Customer> getCustomerDetails(){
       return customerDetailsService.getCustomerDetailService();
    }


    @RequestMapping ("/")
    public String welcomePage(){
        return "Welcome to Banking App";
    }

}
