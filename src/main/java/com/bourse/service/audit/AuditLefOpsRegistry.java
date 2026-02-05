package com.bourse.service.audit;
import com.bourse.enums.GroupRollingEnum;
import com.bourse.repositories.longEnds.TmpAuditLefBoblsRepository;
import com.bourse.repositories.longEnds.TmpAuditLefBoblsRollingRepository;
import com.bourse.repositories.longEnds.TmpAuditLefBtpRepository;
import com.bourse.repositories.longEnds.TmpAuditLefBtpRollingRepository;
import com.bourse.repositories.longEnds.TmpAuditLefBundsRepository;
import com.bourse.repositories.longEnds.TmpAuditLefBundsRollingRepository;
import com.bourse.repositories.longEnds.TmpAuditLefBuxlRepository;
import com.bourse.repositories.longEnds.TmpAuditLefBuxlRollingRepository;
import com.bourse.repositories.longEnds.TmpAuditLefGiltsRepository;
import com.bourse.repositories.longEnds.TmpAuditLefGiltsRollingRepository;
import com.bourse.repositories.longEnds.TmpAuditLefOatRepository;
import com.bourse.repositories.longEnds.TmpAuditLefOatRollingRepository;
import com.bourse.repositories.longEnds.TmpAuditLefShatzRepository;
import com.bourse.repositories.longEnds.TmpAuditLefShatzRollingRepository;
import com.bourse.repositories.longEnds.TmpAuditLefTbondsRepository;
import com.bourse.repositories.longEnds.TmpAuditLefTbondsRollingRepository;
import com.bourse.repositories.longEnds.TmpAuditLefTnotesRepository;
import com.bourse.repositories.longEnds.TmpAuditLefTnotesRollingRepository;

import org.springframework.stereotype.Component;

import java.util.EnumMap;
import java.util.Map;

@Component
public class AuditLefOpsRegistry {
	private final Map<GroupRollingEnum, AuditLefOps> registry =
            new EnumMap<GroupRollingEnum, AuditLefOps>(GroupRollingEnum.class);

    public AuditLefOpsRegistry(

        TmpAuditLefBundsRepository bundsRepo,
        TmpAuditLefBundsRollingRepository bundsRollingRepo,

        TmpAuditLefBoblsRepository boblsRepo,
        TmpAuditLefBoblsRollingRepository boblsRollingRepo,

        TmpAuditLefShatzRepository shatzRepo,
        TmpAuditLefShatzRollingRepository shatzRollingRepo,

        TmpAuditLefBuxlRepository buxlRepo,
        TmpAuditLefBuxlRollingRepository buxlRollingRepo,

        TmpAuditLefOatRepository oatRepo,
        TmpAuditLefOatRollingRepository oatRollingRepo,

        TmpAuditLefBtpRepository btpRepo,
        TmpAuditLefBtpRollingRepository btpRollingRepo,

        TmpAuditLefGiltsRepository giltsRepo,
        TmpAuditLefGiltsRollingRepository giltsRollingRepo,

        TmpAuditLefTnotesRepository tNotesRepo,
        TmpAuditLefTnotesRollingRepository tNotesRollingRepo,

        TmpAuditLefTbondsRepository tBondsRepo,
        TmpAuditLefTbondsRollingRepository tBondsRollingRepo
    ) {

        registry.put(GroupRollingEnum.BUNDS, referDate -> {
            bundsRepo.deleteDataByReferDate(referDate);
            bundsRollingRepo.deleteDataByReferDate(referDate);
        });

        registry.put(GroupRollingEnum.BOBLS, referDate -> {
            boblsRepo.deleteDataByReferDate(referDate);
            boblsRollingRepo.deleteDataByReferDate(referDate);
        });

        registry.put(GroupRollingEnum.SHATZ, referDate -> {
            shatzRepo.deleteDataByReferDate(referDate);
            shatzRollingRepo.deleteDataByReferDate(referDate);
        });

        registry.put(GroupRollingEnum.BUXL, referDate -> {
            buxlRepo.deleteDataByReferDate(referDate);
            buxlRollingRepo.deleteDataByReferDate(referDate);
        });

        registry.put(GroupRollingEnum.OAT, referDate -> {
            oatRepo.deleteDataByReferDate(referDate);
            oatRollingRepo.deleteDataByReferDate(referDate);
        });

        registry.put(GroupRollingEnum.BTP, referDate -> {
            btpRepo.deleteDataByReferDate(referDate);
            btpRollingRepo.deleteDataByReferDate(referDate);
        });

        registry.put(GroupRollingEnum.GILTS, referDate -> {
            giltsRepo.deleteDataByReferDate(referDate);
            giltsRollingRepo.deleteDataByReferDate(referDate);
        });

        registry.put(GroupRollingEnum.T_NOTES, referDate -> {
            tNotesRepo.deleteDataByReferDate(referDate);
            tNotesRollingRepo.deleteDataByReferDate(referDate);
        });

        registry.put(GroupRollingEnum.T_BONDS, referDate -> {
            tBondsRepo.deleteDataByReferDate(referDate);
            tBondsRollingRepo.deleteDataByReferDate(referDate);
        });
    }

    public void deleteAudit(Long baseGroupId, String referDate) {

        GroupRollingEnum group =
                GroupRollingEnum.fromBaseGroupId(baseGroupId);

        if (group == null) {
            throw new IllegalArgumentException(
                "Invalid baseGroupId: " + baseGroupId
            );
        }

        registry.get(group).deleteByReferDate(referDate);
    }
}
