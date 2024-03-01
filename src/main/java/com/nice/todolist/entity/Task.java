package com.nice.todolist.entity;

import jakarta.persistence.*;

@Entity
@Table(name="pending")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="tasks")
    private String tasks;

    // no arg constructor

    public Task() {
    }


    // constructor

    public Task(String tasks) {
        this.tasks = tasks;
    }

    // geters and setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTasks() {
        return tasks;
    }

    public void setTasks(String tasks) {
        this.tasks = tasks;
    }
}
