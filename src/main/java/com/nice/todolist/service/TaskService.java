package com.nice.todolist.service;

import com.nice.todolist.entity.Task;

import java.util.List;

public interface TaskService {

    List<Task> getTasks();

    Task addTask(Task task);

    Task getTask(int theId);

    Task updateTask(Task task);



}
