package com.nice.todolist.dao;

import com.nice.todolist.entity.Task;

import java.util.List;

public interface TasksDao {

    List<Task> getTasks();
}