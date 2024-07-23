import React, { useState, useEffect } from 'react';
import '@/style/topSearch.scss';
import { centerInfoApi, getManagersApi } from '@/api/operate/account/manager';
import { useDispatch, useSelector } from 'react-redux';
import { setManagerList, setSearchParam } from '@/store/manager';
import Select from '@/components/input/Select';
import { MANAGER_SEARCH_TYPE_OPTION } from '@/constants/common';
import SearchText from '@/components/input/SearchText';

const TopSearch = () => {
  const dispatch = useDispatch();
  const [searchCenterOption, setSearchCenterOption] = useState([]);
  const [searchParams, setSearchParams] = useState({
    option: '',
    value: '',
    center: '',
    grade: '',
    state: '',
  });
  const { searchParam } = useSelector((state) => state.manager);

  const handleSearch = () => {
    dispatch(setSearchParam({ ...searchParams }));
  };
  const getManagers = async (params) => {
    const res = await getManagersApi(params);
    if (res.header.resultCode === 0) {
      dispatch(setManagerList(res.data));
    }
  };

  const getCenterOption = async () => {
    const res = await centerInfoApi({});
    const centerList = res?.data?.centers?.map((item) => {
      return {
        value: item.id,
        label: item.title,
      };
    });

    setSearchCenterOption(centerList);
  };

  const handleInput = (e) => {
    setSearchParams((prev) => {
      return { ...prev, value: e.target.value };
    });
  };

  useEffect(() => {
    getManagers(searchParam);
  }, [searchParam]);

  useEffect(() => {
    getCenterOption();
  }, []);

  return (
    <div className="search-wrap">
      <Select
        options={searchCenterOption}
        value={searchParams.center}
        label={'센터'}
        handleChange={(event) => {
          setSearchParams((prev) => {
            return { ...prev, center: event.value };
          });
        }}
      />
      <Select
        options={MANAGER_SEARCH_TYPE_OPTION}
        value={searchParams.option}
        label={'검색조건'}
        handleChange={(event) => {
          setSearchParams((prev) => {
            return { ...prev, option: event.value };
          });
        }}
      />
      <SearchText
        value={searchParams.value}
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
