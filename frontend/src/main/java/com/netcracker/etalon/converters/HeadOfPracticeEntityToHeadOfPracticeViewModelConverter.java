package com.netcracker.etalon.converters;


import com.netcracker.etalon.beans.HeadOfPracticeViewModel;
import com.netcracker.etalon.beans.UserViewModel;
import com.netcracker.pmbackend.impl.entities.HeadofpracticesEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.convert.converter.Converter;

public class HeadOfPracticeEntityToHeadOfPracticeViewModelConverter implements Converter<HeadofpracticesEntity, HeadOfPracticeViewModel> {

    @Autowired
    private ConversionService conversionService;

    public HeadOfPracticeViewModel convert(HeadofpracticesEntity headofpracticesEntity) {
        HeadOfPracticeViewModel headOfPracticeViewModel = new HeadOfPracticeViewModel();
        headOfPracticeViewModel.setId(String.valueOf(headofpracticesEntity.getId()));
        headOfPracticeViewModel.setName(headofpracticesEntity.getName());
        headOfPracticeViewModel.setUserViewModel(conversionService.convert(headofpracticesEntity.getUsersByUserId(), UserViewModel.class));
        return headOfPracticeViewModel;
    }
}