package com.nice.todolist.entity;

import jakarta.persistence.*;

@Entity
@Table(name="pending")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="task")
    private String tasks;

    @Column(name = "completed")
    private boolean completed ;

    // no arg constructor

    public Task() {
    }


    // constructor

    public Task(String tasks) {
        this.tasks = tasks;
    }

    public Task(boolean completed) {
        this.completed = completed;
    }

    public Task(String tasks, boolean completed) {
        this.tasks = tasks;
        this.completed = completed;
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


    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", tasks='" + tasks + '\'' +
                ", completed=" + completed +
                '}';
    }
}
