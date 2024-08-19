package com.bourse.domain.longEnds;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "long_ends_display_settings")
public class LongEndsDisplaySettings {
	@Id
	@GeneratedValue(generator = "long_ends_display_settings_sequence")
	   @GenericGenerator(
	      name = "long_ends_display_settings_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "long_ends_display_settings_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
    private Long id;
	private Long groupId;
    private Long subgroupId;
    private Long parentgroupId;
    private Boolean isVisible;
}

