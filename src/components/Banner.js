import {AppBar, Box, IconButton, Menu, MenuItem, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const options = [
    'Projects',
];

const ITEM_HEIGHT = 48;

export default function Banner() {
    let navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        if(event.target.innerText === "Projects") {
            navigate("/projects", {replace: true});
        }
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={{ background: '#000000'}}>
                <Toolbar>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        color='inherit'
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Laurence Daisy Floriani
                    </Typography>
                    <a href="/LaurenceDaisyFloriani.pdf" download>
                        <img src={"logo_cv.png"} alt="logo" className="logo-medium" height={50}/>
                    </a>
                </Toolbar>
            </AppBar>
        </Box>
    );
}