package com.bourse.controllers.longEndImpliedVol;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.domain.longEndImpliedVol.LongEndImpliedVolData;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.dto.longEndImpliedVol.LongEndImpliedVolGridRequestDTO;
import com.bourse.dto.longEndImpliedVol.LongEndImpliedVolGridResponseDTO;
import com.bourse.service.longEndImpliedVol.LongEndImpliedVolGridService;
import com.bourse.service.longEndImpliedVol.LongEndImpliedVolService;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;

@RestController
@RequestMapping(value = "longEndImpliedVol")
public class LongEndImpliedVolController {

    private final LongEndImpliedVolService longEndImpliedVolService;
    private final LongEndImpliedVolGridService longEndImpliedVolGridService;

    public LongEndImpliedVolController(
            LongEndImpliedVolService longEndImpliedVolService,
            LongEndImpliedVolGridService longEndImpliedVolGridService) {
        this.longEndImpliedVolService = longEndImpliedVolService;
        this.longEndImpliedVolGridService = longEndImpliedVolGridService;
    }

    @GetMapping(value = "checkifcansave/{groupId}/{referDate}")
    public ResponseEntity<Boolean> checkIfCanSave(
            @PathVariable("groupId") Long groupId,
            @PathVariable("referDate") String referDate) {
        return new ResponseEntity<>(
                longEndImpliedVolService.checkIfCanSave(referDate, groupId),
                HttpStatus.OK);
    }

    @PostMapping(value = "save-long-end-implied-vol-data")
    public ResponseEntity<Boolean> saveData(@RequestBody List<LongEndImpliedVolData> data) {
        longEndImpliedVolService.saveData(data);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping(value = "update-long-end-implied-vol-data")
    public ResponseEntity<Boolean> updateData(@RequestBody List<UpdateDataDTO> data) {
        longEndImpliedVolService.updateData(data);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @GetMapping(value = "data/{groupId}/{referDate}")
    public ResponseEntity<List<LongEndImpliedVolData>> getData(
            @PathVariable("groupId") Long groupId,
            @PathVariable("referDate") String referDate) {
        return new ResponseEntity<>(
                longEndImpliedVolService.findByReferDateAndGroupId(referDate, groupId),
                HttpStatus.OK);
    }

    @GetMapping(value = "audit-data/{groupId}/{referDate}")
    public ResponseEntity<Object> getAuditData(
            @PathVariable("groupId") Long groupId,
            @PathVariable("referDate") String referDate) {
        return new ResponseEntity<>(
                longEndImpliedVolService.findAuditData(groupId, referDate),
                HttpStatus.OK);
    }

    @GetMapping(value = "getlatest/{groupId}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<String> getLatest(@PathVariable("groupId") String groupId) {
        return new ResponseEntity<>(
                longEndImpliedVolService.findLatestData(groupId),
                HttpStatus.OK);
    }

    @DeleteMapping(value = "delete/{groupId}/{referDate}")
    public ResponseEntity<HttpStatus> deleteData(
            @PathVariable("groupId") Long groupId,
            @PathVariable("referDate") String referDate) {
        longEndImpliedVolService.deleteData(groupId, referDate);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /*
     * Dynamic history/filter grid.
     *
     * The request is intentionally group-driven. BUNDS currently uses groups 86/87,
     * but this endpoint does not hard-code those IDs, so the same screen can later
     * support BOBL, SCHATZ, BUXL, OAT, BTP, GILTS, T-NOTES and T-BONDS by adding
     * their table_management configuration and frontend MODULES entries.
     */
    @PostMapping(value = "getgriddata")
    public ResponseEntity<LongEndImpliedVolGridResponseDTO> getGridData(
            @RequestBody LongEndImpliedVolGridRequestDTO request) {
        return new ResponseEntity<>(
                longEndImpliedVolGridService.getGridData(request),
                HttpStatus.OK);
    }
    @PostMapping(value = "getgraphdatabytype")
    public ResponseEntity<List<GraphResponseColConfigDTO>> getGraphDataByType(
            @RequestBody GraphRequestDTO request) {
        return new ResponseEntity<>(
                longEndImpliedVolService.getGraphDataByType(request),
                HttpStatus.OK);
    }

    
}
