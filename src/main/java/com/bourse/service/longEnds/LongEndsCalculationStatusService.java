package com.bourse.service.longEnds;
import java.util.LinkedHashMap;import java.util.Map;
import org.springframework.jdbc.core.JdbcTemplate;import org.springframework.stereotype.Service;
@Service
public class LongEndsCalculationStatusService {
 private final JdbcTemplate jdbc; public LongEndsCalculationStatusService(JdbcTemplate jdbc){this.jdbc=jdbc;}
 public void markPending(Long g,String d,String op){jdbc.update("INSERT INTO long_ends_calculation_status(group_id,refer_date,operation,status,created_at) VALUES(?,?,?,'PENDING',NOW()) ON DUPLICATE KEY UPDATE operation=VALUES(operation),status='PENDING',created_at=NOW(),started_at=NULL,completed_at=NULL,error_message=NULL",g,d,op);}
 public void markRunning(Long g,String d){jdbc.update("UPDATE long_ends_calculation_status SET status='RUNNING',started_at=NOW(),completed_at=NULL,error_message=NULL WHERE group_id=? AND refer_date=?",g,d);}
 public void markCompleted(Long g,String d){jdbc.update("UPDATE long_ends_calculation_status SET status='COMPLETED',completed_at=NOW(),error_message=NULL WHERE group_id=? AND refer_date=?",g,d);}
 public void markFailed(Long g,String d,Exception e){String m=e.getMessage()==null?"Background calculation failed":e.getMessage();if(m.length()>1000)m=m.substring(0,1000);jdbc.update("UPDATE long_ends_calculation_status SET status='FAILED',completed_at=NOW(),error_message=? WHERE group_id=? AND refer_date=?",m,g,d);}
 public Map<String,Object> getStatus(Long g,String d){return jdbc.query("SELECT operation,status,started_at,completed_at,error_message FROM long_ends_calculation_status WHERE group_id=? AND refer_date=?",rs->{Map<String,Object> m=new LinkedHashMap<>();if(!rs.next()){m.put("status","NONE");return m;}m.put("operation",rs.getString(1));m.put("status",rs.getString(2));m.put("startedAt",rs.getTimestamp(3));m.put("completedAt",rs.getTimestamp(4));m.put("errorMessage",rs.getString(5));return m;},g,d);}
}