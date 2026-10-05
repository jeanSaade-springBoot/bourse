package com.bourse.service.longEnds;
import java.util.List;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import com.bourse.domain.longEnds.LongEndData;
@Service
public class LongEndsBackgroundCalculationService {
  private final LongEndsService service; private final LongEndsCalculationStatusService status;
  public LongEndsBackgroundCalculationService(LongEndsService service, LongEndsCalculationStatusService status){this.service=service;this.status=status;}
  @Async("longEndsCalculationExecutor")
  public void calculateAfterSave(Long g,String d,List<LongEndData> data){status.markRunning(g,d);try{service.doCalculationSaveSpreadData(data,null);service.runTrendFollowingMavgTask(g,d,d);service.runVolatilityWeightedTrendFollowingMavgTask(g,d,d);service.runFunctionCalculationProcedure(g,d,d);status.markCompleted(g,d);}catch(Exception e){status.markFailed(g,d,e);e.printStackTrace();}}
  @Async("longEndsCalculationExecutor")
  public void calculateAfterUpdate(Long g,String d,List<LongEndData> data,String oldValue,String spreadTotal){status.markRunning(g,d);try{boolean rolling=service.doCalculationSpreadData(data,oldValue,spreadTotal);if(!rolling){service.runTrendFollowingMavgTask(g,d,d);service.runVolatilityWeightedTrendFollowingMavgTask(g,d,d);service.runFunctionCalculationProcedure(g,d,d);}status.markCompleted(g,d);}catch(Exception e){status.markFailed(g,d,e);e.printStackTrace();}}
  @Async("longEndsCalculationExecutor")
  public void calculateAfterDelete(Long g,String d,List<LongEndData> data){status.markRunning(g,d);try{service.reCalculateData(data);status.markCompleted(g,d);}catch(Exception e){status.markFailed(g,d,e);e.printStackTrace();}}
}