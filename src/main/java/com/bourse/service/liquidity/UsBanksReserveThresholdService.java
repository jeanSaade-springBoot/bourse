package com.bourse.service.liquidity;

import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;

import com.bourse.domain.liquidity.UsBanksReserveThresholdEntity;
import com.bourse.dto.liquidity.UsBanksReserveThresholdDTO;
import com.bourse.repositories.liquidity.UsBanksReserveThresholdRepository;

@Service
public class UsBanksReserveThresholdService {

    private final UsBanksReserveThresholdRepository repository;

    public UsBanksReserveThresholdService(UsBanksReserveThresholdRepository repository) {
        this.repository = repository;
    }

    public UsBanksReserveThresholdDTO getLatest() {
        return repository.findById(1L)
                .map(this::toDto)
                .orElse(null);
    }

    public void save(UsBanksReserveThresholdDTO dto, String username) {

        UsBanksReserveThresholdEntity entity =
                repository.findById(1L).orElse(new UsBanksReserveThresholdEntity());

        entity.setId(1L);
        entity.setAbundant(dto.getAbundant());
        entity.setAmple(dto.getAmple());
        entity.setLastUpdated(LocalDateTime.now());
        entity.setUpdatedBy(username);

        repository.save(entity);
    }

    private UsBanksReserveThresholdDTO toDto(UsBanksReserveThresholdEntity entity) {
        UsBanksReserveThresholdDTO dto = new UsBanksReserveThresholdDTO();

        dto.setAbundant(entity.getAbundant());
        dto.setAmple(entity.getAmple());
        dto.setUpdatedBy(entity.getUpdatedBy());

        if (entity.getLastUpdated() != null) {
            dto.setLastUpdated(
                    entity.getLastUpdated()
                            .format(DateTimeFormatter.ofPattern("dd-MMM-yyyy HH:mm"))
            );
        }

        return dto;
    }
}