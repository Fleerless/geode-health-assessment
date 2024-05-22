import React, { SetStateAction } from 'react';
import { SearchButton, SearchButtonContainer, SearchButtonText } from './styles/ButtonContainer.styles';
import { ComplaintResponseArrayType } from "types/ResponseTypes";
import { fetchComplaintData } from "fetch/FetchComplaints";


interface ButtonContainerProps {
    searchTerms: string;
    setSearchTerms: React.Dispatch<SetStateAction<string>>;
    setComplaints: React.Dispatch<SetStateAction<ComplaintResponseArrayType>>;
};

const ButtonContainer: React.FC<ButtonContainerProps> = ({searchTerms, setSearchTerms, setComplaints}) => {
    const fetchData = async () => {
        const complaintsResponse = await fetchComplaintData({searchTerms: searchTerms} );
        setComplaints(complaintsResponse);
    };
    
    const handleSearch = () => {
        fetchData();
    };

    return (
        <SearchButtonContainer>
            <SearchButtonText>Search by terms:</SearchButtonText>
            <div>
                <input
                    type="text"
                    value={searchTerms}
                    onChange={(e) => setSearchTerms(e.target.value)}
                />
                <SearchButton onClick={handleSearch}>Search</SearchButton>
            </div>
        </SearchButtonContainer>
    );
};

export default ButtonContainer;