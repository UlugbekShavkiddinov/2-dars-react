import './header.css'

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="data:image/webp;base64,UklGRl4DAABXRUJQVlA4TFEDAAAvnoAIEN/BoG0jSd77D/qBvgkNRY0kRbULvHCJfwM38884kmwl/z/5OK84OsRFaORGAHpyJ6C+MZCkNA9xnx3uBkMm/YBFIJCHAHEigrtAALSwIwYE+h4IYIUXYWgAZPH6CC44LLgLhgeIV+hwLARVIdvhSH+4ZxpayZc2k3F9V+Ca5u1qUNe2PWrcvGlIU3WDNJRsFC+fZxhZzjPG3az2/I8MCQNXxr8j+j8BLHnRPXgHae79HfGc/ld/Pb/Wq+d/9Pr5/3vimfQfKvmgd/yuj/x0T/z9kP6kHx/e6deHX/Tbg7sn5p7BOee+NQa45d7OfbgN4EVa8F7Yz/10N2ju/R1yefv2er9c3x8B2vOqyi4A1hYpM7NUZWatpMHMKqnaedgNmdgGsGpKa2ZS0XlrzKzMtGYWc+cDnPZ7OL5ZT9WTrxMAqQYwSQ5ohp6kHxKlJxlizgBVHqwCdqkI7JS5HjidJV03HM9riT2A2Yhqic6TDSNHPkxzACYPFIkSqHI1J6U/s12LKqyUFFvAxwWAvu08QCHFftQ3jZHM9UDfqgXqRAfE3COXzPWJ81pUKm1AuUgjaRg5qQLoJKn00/B1lFQAIeGhU+bKo9I/v//KZTX5BmiWaDQ2oJEMMCXLab5Q0oBCkgPK3IV9Zg/U6xkaM+uqbiGvZJsCKFMKkyqlK6CW1IJX7srXzM/1I5e1FMbUJSzVTIkZm+Qy8hAk9dBN0COXlK5HziuJHujbpg2riiMt0wKDBqCcUnO4pj6z10o6oNG4WZNGwzID0KqGXlN04nCWdP6Pp/NaPPSaISa6BQLQZfp5FKBXgHba9QSH7Rae3kjll+/XwITdpGpUsUADUCY6ZqqAEhim6Vo/AXw+S/rIT3PZVPVAJSl2AL2TAuBL5zrG3s0TPUDrXGmMd8Vt0YOHXjdIulwuSv75w3dzTVYDEMzA90AjNeRDAJp5VI3SPYC7TR3jdoYbV6BA2g+7VPSZEHcLqMqFONeQKDLbuY8riO3Id4UGn9Bgo76JGvoF5GzkG6mZSQEIyix407zOOSXdoGTh3KDkMGjB6NygcXSF5hzVucvcp3V8owuAIqe59y9YBwTltnMfX6rOAkA1YcEXyhgH3a2JEO+XxoLVUXkA" alt />
            </div>
            <div className="navbar">
                <a href="index(laundry).html" className="active">Home</a>
                <a href="index(laundry-about).html">About</a>
                <a href="index(laundry-services).html">Services</a>
                <a href="index(laundry-blog).html">Blog</a>
                <a href="index(laundry-contact).html">Contact</a>
            </div>
            <div className="contact">
                <a href="tel:08728256266">
                    <img src="data:image/webp;base64,UklGRi4BAABXRUJQVlA4TCEBAAAvGAAGENegoG0byft4H/IrDQVt2zDe4zn+JDr/CNq2zYogG4L3CM4f1VUEC9T7fcdV/MumpLEgoQIogKmyiDgYkCJ8pHgJgUIKXS4cRpLURnvokbf4Jf9MdeIJIaL/Cty2UdocM7wCf+zoN4suD2so9AadHhNHtQGZfo22xGcR2RUSyeMruwZmi50G2GnGFkB1tJI8KnmgQeFV4bKMNDN3xalk1pJr5Ypy3g4vJ3WrSAkID8JdTrw8SQ/LshKqxBXAzmJ0IVWTYBMGpzSz5/7dDuC+0eE9AtifHo20wMC5h+RVx7ErGVuYyK1ByEYxATa7s/Ve4j48Xr1XB8N+z3sfypqhydjCNK9GAr393AGZ5N/Xi9eybA+5t4PuQrp71DkAAA==" alt />
                    <span>(08) 728 256 266</span>
                </a>
                <a href="#" className="appointment">Make an Appointment</a>
            </div>
        </header>

    );
}

export default Header;