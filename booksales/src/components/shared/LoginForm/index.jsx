const LoginForm = () => {
    const styles ={
        form: {
            display: "flex",
            height: "100vh",
            justifyContent: "center", 
            flexDirection: "column",
            gap: "10px",
            maxWidth: "300px",
            margin: "auto",
            padding: "10px",
        },
        input:{
            padding: "10px",
            fontsize: "16px",
            border: "1px solid #ccc",
            borderRadius: "40px",
        },
        button:{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
        },
    };

    return (
        <form style={styles.form}>
            <input style={styles.input} type="text" placeholder="Username" />
            <input style={styles.input} type="text" placeholder="Email" />
            <input style={styles.input} type="Password" placeholder="Password" />
            <button style={styles.button}>Login</button>
        </form>
    );
};

export default LoginForm;