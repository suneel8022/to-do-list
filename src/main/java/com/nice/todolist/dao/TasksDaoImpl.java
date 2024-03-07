package com.nice.todolist.dao;

import com.nice.todolist.entity.Task;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TasksDaoImpl implements TasksDao {

    private EntityManager entityManager;

    @Autowired
    public TasksDaoImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<Task> getTasks() {

        TypedQuery<Task> query = entityManager.createQuery("select t from Task t", Task.class);

        List<Task> result = query.getResultList();

        return result;

    }

    @Override
    public Task addTask(Task task) {
        Task newTask = entityManager.merge(task);
        return newTask;
    }

    @Override
    public Task getTask(int theId) {
        Task task =  entityManager.find(Task.class , theId);
        return task;
    }


}