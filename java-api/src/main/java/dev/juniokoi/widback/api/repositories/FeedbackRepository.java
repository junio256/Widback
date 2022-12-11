package dev.juniokoi.widback.api.repositories;

import jdk.jfr.Category;
import org.springframework.stereotype.Repository;

public interface FeedbackRepository extends JpaRepository<Category, Long>{
}
