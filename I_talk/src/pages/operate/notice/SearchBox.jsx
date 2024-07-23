import { getCenterOptionApi } from '@/api/consult';
import Select from '@/components/input/Select';
import { setSearchNoticeParam } from '@/store/notice';
import '@/style/searchbox.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useState({
    value: '',
    type: '',
  });
  const [searchCenterOption, setSearchCenterOption] = useState([]);

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

  const onSearch = () => {
    dispatch(setSearchNoticeParam({ ...searchParam }));
  };

  const searchValue = (e) => {
    const { value } = e.target;

    if (value.length <= 20) {
      setSearchParam((prev) => {
        return { ...prev, value };
      });
    }
  };

  const clearText = () => {
    setSearchParam((prev) => {
      return { ...prev, value: '' };
    });
  };

  useEffect(() => {
    getCenterOption();
  }, []);

  return (
    <>
      <Select
        options={searchCenterOption}
        value={searchParam.type}
        isCommon={true}
        handleChange={(event) => {
          setSearchParam((prev) => {
            return { ...prev, type: event.value };
          });
        }}
      />
      <div className="search-box">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchParam.value}
          onChange={searchValue}
        />
        {searchParam.value && <button className="close-btn" onClick={clearText}></button>}
        <button className="submit-btn" type="submit" onClick={onSearch}></button>
      </div>
    </>
  );
};

export default SearchBox;
