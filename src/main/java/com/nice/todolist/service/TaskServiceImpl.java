package com.nice.todolist.service;

import com.nice.todolist.dao.TasksDao;
import com.nice.todolist.entity.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    private TasksDao tasksDao;

    @Autowired
    public TaskServiceImpl(TasksDao theTasksDao) {
        tasksDao = theTasksDao;
    }



    @Override
    public List<Task> getTasks() {
            return tasksDao.getTasks();
    }
}
