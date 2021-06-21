package com.entities;

import javax.persistence.*;

@Entity
public class Transaction {
    @Id
    @Column(name="transactionId")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int transactionId;

    @Column(name="SenderId")
    private int senderId;

    @Column(name="ReceiverId")
    private int receiverId;

    @Column(name="Sender")
    private String sender;

    @Column(name="Receiver")
    private String receiver;

    @Column(name="Amount")
    private double amount;


    public int getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(int transactionId) {
        this.transactionId = transactionId;
    }

    public int getSenderId() {
        return senderId;
    }

    public void setSenderId(int senderId) {
        this.senderId = senderId;
    }

    public int getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(int receiverId) {
        this.receiverId = receiverId;
    }

    public String getSender() {
        return sender;
    }
    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getReceiver() {
        return receiver;
    }
    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}


