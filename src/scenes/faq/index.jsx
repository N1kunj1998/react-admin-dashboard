import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box>
        <Header title="FAQ" subtitle="Frequently Asked Questions"/>
        
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laudantium repellat earum quod quisquam natus quidem ratione, beatae commodi, veritatis omnis magnam voluptas a, praesentium corrupti vel! Tempore ullam possimus animi, rem nobis sapiente deserunt harum quam corrupti nulla autem rerum maxime placeat aperiam dolorem unde! Pariatur sequi aliquam voluptatem!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Another Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laudantium repellat earum quod quisquam natus quidem ratione, beatae commodi, veritatis omnis magnam voluptas a, praesentium corrupti vel! Tempore ullam possimus animi, rem nobis sapiente deserunt harum quam corrupti nulla autem rerum maxime placeat aperiam dolorem unde! Pariatur sequi aliquam voluptatem!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your Favourite Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laudantium repellat earum quod quisquam natus quidem ratione, beatae commodi, veritatis omnis magnam voluptas a, praesentium corrupti vel! Tempore ullam possimus animi, rem nobis sapiente deserunt harum quam corrupti nulla autem rerum maxime placeat aperiam dolorem unde! Pariatur sequi aliquam voluptatem!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Some Random Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laudantium repellat earum quod quisquam natus quidem ratione, beatae commodi, veritatis omnis magnam voluptas a, praesentium corrupti vel! Tempore ullam possimus animi, rem nobis sapiente deserunt harum quam corrupti nulla autem rerum maxime placeat aperiam dolorem unde! Pariatur sequi aliquam voluptatem!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    The Final Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laudantium repellat earum quod quisquam natus quidem ratione, beatae commodi, veritatis omnis magnam voluptas a, praesentium corrupti vel! Tempore ullam possimus animi, rem nobis sapiente deserunt harum quam corrupti nulla autem rerum maxime placeat aperiam dolorem unde! Pariatur sequi aliquam voluptatem!
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default FAQ