import {Button, Container, Typography} from "@mui/material";
import './ArchivesPage.css'
import {useEffect, useState} from "react";
import { getArchievedCalls, unarchieveCalls} from "../../api/ApiContainer";
import {Archive} from "@mui/icons-material";
import CallCard from "../../components/CallCard/CallCard";
import {Call, SortedCallArr} from "../../types/ApiContainer";
import CallDetailsSection from "../../components/CallDetailsSection/CallDetailsSection";

const ArchivesPage = () => {
    const [cardsData, setCardsData] = useState<SortedCallArr[]>();
    const [loading, setLoading] = useState(false);
    const [selectedCard, setSelectedCard] = useState<Call | null>(null);
    const fetchCardsData = async () => {
        const res = await getArchievedCalls();
        setCardsData(res)
    }
    const unArchiveAll = async () => {
        setLoading(true);
        if(!cardsData) return;
        const ids: string[] = []
        cardsData.forEach((group) => {
            group.calls.forEach((call) => ids.push(call.id))
        })
        const res = await unarchieveCalls(ids);
        if (res) {
            setCardsData([])
            fetchCardsData();
        }


    }
    useEffect(() => {
        if (!cardsData) {
            fetchCardsData();
        }
    }, [cardsData]);
    return (
        <div className="stacked-cards-page">
            {/* Left side with stacked cards */}
            <Container className="card-container">
                <Button
                    className='archive-all-button'
                    variant="contained"
                    startIcon={<Archive/>}
                    onClick={unArchiveAll}
                    disabled={loading}
                >
                    Un-Archieve All Calls
                </Button>
                {cardsData && cardsData.map((card) => {
                    return (
                        <CallCard cardDetails={card} key={card.order} setSelectedCard={setSelectedCard}/>
                    )
                })}
            </Container>

            {/* Right side with blurred background */}
            <div className={selectedCard?'selectedCardScreen':"glass-background animated-background"}>
                {selectedCard ? <CallDetailsSection selectedCard={selectedCard}/>
                    :(
                        <Typography variant="h4" color="textPrimary">
                            Click on Any Card to View Details
                        </Typography>
                    )}
            </div>
        </div>
    );
}

export default ArchivesPage;