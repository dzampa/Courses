package com.dzsystem.helpdesk.api.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import com.dzsystem.helpdesk.api.entity.ChangeStatus;
import com.dzsystem.helpdesk.api.entity.Ticket;

@Component
public interface TicketService {

	Ticket createOrUpdate(Ticket ticket);
	
	Optional<Ticket> findById(String id);
	
	void delete(String id);
	
	Page<Ticket> listTicket(int page, int count);
	
	ChangeStatus createChangeStatus(ChangeStatus changeStatus);
	
	Iterable<ChangeStatus> listChangeStatus(String ticketId);
	
	Page<Ticket> findByCurrentUser(int page, int count, String userId);
	
	Page<Ticket> findByParameters(int page, int count,String title,String status,String priority);
	
	Page<Ticket> findByParametersAndCurrentUser(int page, int count,String title,String status,String priority,String userId);
	
	Page<Ticket> findByNumber(int page, int count,Integer number);
	
	Iterable<Ticket> findAll();
	
	public Page<Ticket> findByParametersAndAssignedUser(int page, int count,String title,String status,String priority,String assignedUserId);
}
