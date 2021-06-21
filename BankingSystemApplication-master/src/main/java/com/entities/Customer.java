package com.entities;

import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@DynamicUpdate
public class Customer {

    @Id
    @Column(name="Customer_Id")
    private int id;

    @Column(name="Customer_Name")
    private String name;

    @Column(name="Balance")
    private double balance;

    @Column(name="Email_ID")
    private String email;

    @Column(name="Contact_Number")
    private double contact;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public double getContact() {
        return contact;
    }

    public void setContact(double contact) {
        this.contact = contact;
    }
}
