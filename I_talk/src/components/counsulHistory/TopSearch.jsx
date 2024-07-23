import React, { useState, useRef, useEffect } from 'react';
import '@/style/topSearch.scss';
import Calendar from '@/components/Calendar';
import { getCategoryOptionApi, getCenterOptionApi, getChatHistoryApi } from '@/api/consult';
import { useDispatch, useSelector } from 'react-redux';
import { setConsultList, setSearchParam } from '@/store/consult';
import Select from '@/components/input/Select';
import { SEARCH_TYPE_OPTION } from '@/constants/common';
import SearchText from '@/components/input/SearchText';

const TopSearch = () => {
  const dispatch = useDispatch();
  const [categoryOption, setCategoryOption] = useState([]);
  const [searchCenterOption, setSearchCenterOption] = useState([]);
  const [searchParams, setSearchParams] = useState({
    startDate: '',
    endDate: '',
    centerId: '',
    categoryId: '',
    searchType: '',
    searchText: '',
  });
  const { searchParam } = useSelector((state) => state.consult);

  const handleSearch = () => {
    dispatch(setSearchParam({ ...searchParams }));
  };
  const getChatHistory = async (params) => {
    const res = await getChatHistoryApi(params);
    if (res.header.resultCode === 0) {
      dispatch(setConsultList(res.data));
    }
  };

  const handleDateChange = (value) => {
    setSearchParams((prev) => {
      return { ...prev, ...value };
    });
  };

  const getCategoryOption = async (centerId) => {
    const res = await getCategoryOptionApi({ centerId });
    const categoryList = res.data?.map((item) => {
      return {
        value: item.categoryId,
        label: item.parentCategoryName + ' > ' + item.categoryName,
      };
    });

    setCategoryOption(categoryList);
  };

  const getCenterOption = async () => {
    const res = await getCenterOptionApi({});
    const centerList = res?.data?.map((item) => {
      return {
        value: item.centerId,
        label: item.centerName,
      };
    });

    setSearchCenterOption(centerList);
  };

  const handleInput = (e) => {
    setSearchParams((prev) => {
      return { ...prev, searchText: e.target.value };
    });
  };

  useEffect(() => {
    const convertParam = {
      ...searchParam,
      startDate: searchParam.startDate ? searchParam.startDate.replaceAll('-', '') : '',
      endDate: searchParam.endDate ? searchParam.endDate.replaceAll('-', '') : '',
    };

    getChatHistory(convertParam);
  }, [searchParam]);

  useEffect(() => {
    getCenterOption();
  }, []);

  return (
    <div className="search-wrap">
      <Calendar
        value={{
          startDate: searchParams.startDate,
          endDate: searchParams.endDate,
        }}
        handleDateChange={handleDateChange}
      />
      <Select
        options={searchCenterOption}
        value={searchParams.centerId}
        label={'센터'}
        handleChange={(event) => {
          setSearchParams((prev) => {
            return { ...prev, centerId: event.value, categoryId: '' };
          });
          getCategoryOption(event.value);
        }}
      />
      <Select
        options={categoryOption}
        value={searchParams.categoryId}
        label={'카테고리'}
        handleChange={(event) => {
          setSearchParams((prev) => {
            return { ...prev, categoryId: event.value };
          });
        }}
      />
      <Select
        options={SEARCH_TYPE_OPTION}
        value={searchParams.searchType}
        label={'검색조건'}
        handleChange={(event) => {
          setSearchParams((prev) => {
            return { ...prev, searchType: event.value };
          });
        }}
      />
      <SearchText
        value={searchParams.searchText}
        onChange={handleInput}
        label={'검색어 입력'}
        placeholder="검색어를 입력하세요."
      />
      <i className="ico-bar"></i>
      <button className="btn bg black" onClick={handleSearch}>
        조회
      </button>
    </div>
  );
};

export default TopSearch;
