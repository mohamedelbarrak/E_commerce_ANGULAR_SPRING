package com.youtube.jwt.service;

import com.youtube.jwt.constant.PromotionPaging;
import com.youtube.jwt.criteria.PromotionCriteriaSearch;
import com.youtube.jwt.entity.*;

import org.springframework.data.domain.Page;

import java.util.List;

public interface PromotionService {

    public Page<Promotion> findAll(PromotionPaging promotionPaging , PromotionCriteriaSearch promotionCriteriaSearch);

    public List<Promotion> listAll();

    public Promotion save(Promotion promotion);

    public Promotion get(Long promotionId);

    public Promotion update(Promotion promotion , Long promotionId);

    public void delete(Long promotionId);

}
