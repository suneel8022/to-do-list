package com.nice.todolist.dao;

import com.nice.todolist.entity.Task;

import java.util.List;

public interface TasksDao {

    List<Task> getTasks();

    Task addTask(Task task);

    Task getTask(int theId);

    Task updateTask(Task task);

    void deleteTaskById(int theId);

}
